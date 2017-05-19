#   Created by: Deon
#       5/18/2017
#   graphing.py
#
# requires access to open source library: "plotly"
import plotly as py
import plotly.graph_objs as go

import numpy as np

N = 100

trace0 = go.Scatter(
    x = np.random.randn(N)+4,
    y = np.random.randn(N)+4,
    name = 'Group 1',
    mode = 'markers',
    marker = dict(
        size = 10,
        color = 'rgb(255,0,0)',
        line = dict(
            width = 2,
            color = 'rgb(255,0,0)'
        )
    )

)

trace1 = go.Scatter(
    x = np.random.randn(N)+4,
    y = np.random.randn(N)+4,
    name = 'Group 2',
    mode = 'markers',
    marker = dict(
        size = 10,
        color = 'rgb(0,0,255)',
        line = dict(
            width = 2,
            color = 'rgb(0,0,255)'
        )
    )

)

trace2 = go.Scatter(
    x = np.random.randn(N)-4,
    y = np.random.randn(N)-4,
    name = 'Group 1',
    mode = 'markers',
    marker = dict(
        size = 10,
        color = 'rgb(255,0,0)',
        line = dict(
            width = 2,
            color = 'rgb(255,0,0)'
        )
    )

)

trace3 = go.Scatter(
    x = np.random.randn(N)-4,
    y = np.random.randn(N)-4,
    name = 'Group 2',
    mode = 'markers',
    marker = dict(
        size = 10,
        color = 'rgb(0,0,255)',
        line = dict(
            width = 2,
            color = 'rgb(0,0,255)'
        )
    )

)
data_list = [trace0, trace1, trace2, trace3]

layout_dict = dict(title = 'Training Data',
              yaxis = dict(zeroline = False),
              xaxis = dict(zeroline = False))

fig = dict(data=data_list, layout = layout_dict)
py.offline.init_notebook_mode()
py.offline.plot(fig, filename='test_plots.html')