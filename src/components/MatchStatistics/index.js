import React from 'react'
import {PieChart, Pie, Legend, Tooltip, Cell} from 'recharts'
import './index.css'

const COLORS = ['#4caf50', '#f44336', '#ffeb3b']

function MatchStatistics({stats}) {
  const data = [
    {name: 'Won', value: stats.won},
    {name: 'Lost', value: stats.lost},
    {name: 'Drawn', value: stats.drawn},
  ]

  return (
    <div className="match-statistics">
      <h2 className="statistics-title">Match Statistics</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default MatchStatistics
