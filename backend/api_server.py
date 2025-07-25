from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.wsgi import WSGIMiddleware
import json

from sample_figures import get_figures
from app import app as dash_app

server = FastAPI(title="SkyIntel API")
server.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Dash under /dash
server.mount("/dash", WSGIMiddleware(dash_app.server))


@server.get("/api/fig/{fig_id}")
async def get_figure(fig_id: str):
    figs = get_figures()
    fig = figs.get(fig_id)
    if not fig:
        raise HTTPException(status_code=404, detail="Figure not found")
    return JSONResponse(content=json.loads(fig.to_json()))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(server, host="0.0.0.0", port=8000)

