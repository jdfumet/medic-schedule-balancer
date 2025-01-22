import React from 'react';
import { UserMinus } from 'lucide-react';

const Absences = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Gestion des absences</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-medical-600 hover:bg-medical-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medical-500 transition-colors duration-200">
          <UserMinus className="w-4 h-4 mr-2" />
          Déclarer une absence
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center text-gray-500">
          Aucune absence n'a été déclarée pour le moment.
        </div>
      </div>
    </div>
  );
};

export default Absences;