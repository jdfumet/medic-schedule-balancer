import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const Index = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + (direction === 'next' ? 7 : -7));
      return newDate;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Planning hebdomadaire</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigateWeek('prev')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-5 h-5 text-medical-500" />
            <span className="text-sm font-medium text-gray-900">
              {format(currentDate, 'MMMM yyyy', { locale: fr })}
            </span>
          </div>
          <button
            onClick={() => navigateWeek('next')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="calendar-grid">
          {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day) => (
            <div
              key={day}
              className="p-4 text-center font-medium text-gray-700 bg-gray-50 border-b border-gray-200"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="calendar-cell">
              <div className="text-right text-sm text-gray-500">
                {format(
                  new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + index + 1)),
                  'd',
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;