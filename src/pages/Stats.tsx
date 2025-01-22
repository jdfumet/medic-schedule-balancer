import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Stats = () => {
  // Données factices pour la démonstration
  const data = [
    { name: 'Dr. Martin', demijournees: 42 },
    { name: 'Dr. Dubois', demijournees: 38 },
    { name: 'Dr. Bernard', demijournees: 45 },
    { name: 'Dr. Thomas', demijournees: 40 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Statistiques</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Nombre de demi-journées par médecin
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="demijournees" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;