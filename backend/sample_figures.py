import pandas as pd
import numpy as np
import plotly.express as px
from functools import lru_cache


@lru_cache(maxsize=None)
def get_figures():
    """Return demo Plotly figures keyed by id."""
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    df = pd.DataFrame({
        "Month": months,
        "Flights": np.random.randint(50, 150, len(months)),
        "Revenue": np.random.randint(10000, 20000, len(months)),
        "Profit": np.random.randint(2000, 8000, len(months)),
    })
    figs = {
        "vuelos-mes": px.bar(df, x="Month", y="Flights", title="Vuelos por Mes"),
        "ingresos-mes": px.line(df, x="Month", y="Revenue", title="Ingresos por Mes"),
        "ganancia-mes": px.area(df, x="Month", y="Profit", title="Ganancia por Mes"),
    }
    return figs
