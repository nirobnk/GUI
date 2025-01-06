import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, User } from 'lucide-react';

const ClassSchedule = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  
  // Sample schedule data
  const scheduleData = [
    {
      id: 1,
      subject: 'Mathematics',
      day: 'Monday',
      startTime: '09:00',
      endTime: '10:30',
      room: 'Room 101',
      instructor: 'Dr. Johnson',
      color: 'bg-blue-100 border-blue-300 text-blue-800'
    },
    {
      id: 2,
      subject: 'Physics',
      day: 'Monday',
      startTime: '11:00',
      endTime: '12:30',
      room: 'Lab 203',
      instructor: 'Prof. Smith',
      color: 'bg-purple-100 border-purple-300 text-purple-800'
    },
    {
      id: 3,
      subject: 'Computer Science',
      day: 'Tuesday',
      startTime: '10:00',
      endTime: '11:30',
      room: 'Lab 105',
      instructor: 'Dr. Wilson',
      color: 'bg-green-100 border-green-300 text-green-800'
    },
    {
      id: 4,
      subject: 'Chemistry',
      day: 'Wednesday',
      startTime: '14:00',
      endTime: '15:30',
      room: 'Lab 302',
      instructor: 'Dr. Brown',
      color: 'bg-yellow-100 border-yellow-300 text-yellow-800'
    }
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = Math.floor(i/2) + 8;
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour.toString().padStart(2, '0')}:${minute}`;
  });

  const getClassesForDayAndTime = (day, time) => {
    return scheduleData.filter(
      class_ => 
        class_.day === day && 
        class_.startTime === time
    );
  };

  const getNextWeek = () => {
    const next = new Date(currentWeek);
    next.setDate(next.getDate() + 7);
    setCurrentWeek(next);
  };

  const getPrevWeek = () => {
    const prev = new Date(currentWeek);
    prev.setDate(prev.getDate() - 7);
    setCurrentWeek(prev);
  };

  return (
    <div className="p-6">
      {/* Schedule Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Calendar className="mr-2 h-6 w-6" />
            Class Schedule
          </h2>
          <div className="flex items-center space-x-4">
            <button 
              onClick={getPrevWeek}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-semibold">
              Week of {currentWeek.toLocaleDateString()}
            </span>
            <button 
              onClick={getNextWeek}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Time slots header */}
            <div className="grid grid-cols-6 gap-2">
              <div className="h-20 p-2 font-semibold text-gray-500">Time</div>
              {days.map(day => (
                <div key={day} className="h-20 p-2 font-semibold text-center bg-gray-50 rounded-t-lg">
                  {day}
                </div>
              ))}
            </div>

            {/* Schedule grid */}
            {timeSlots.map(time => (
              <div key={time} className="grid grid-cols-6 gap-2">
                <div className="h-20 p-2 text-sm text-gray-500 border-t">
                  {time}
                </div>
                {days.map(day => (
                  <div key={`${day}-${time}`} className="h-20 p-2 border-t relative">
                    {getClassesForDayAndTime(day, time).map(class_ => (
                      <div
                        key={class_.id}
                        className={`absolute inset-x-1 top-1 p-2 rounded-lg border ${class_.color} shadow-sm`}
                      >
                        <div className="font-semibold text-sm">{class_.subject}</div>
                        <div className="flex items-center text-xs mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {class_.startTime} - {class_.endTime}
                        </div>
                        <div className="flex items-center text-xs mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {class_.room}
                        </div>
                        <div className="flex items-center text-xs mt-1">
                          <User className="h-3 w-3 mr-1" />
                          {class_.instructor}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Classes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Today's Classes</h3>
        <div className="space-y-4">
          {scheduleData
            .filter(class_ => class_.day === days[new Date().getDay() - 1])
            .sort((a, b) => a.startTime.localeCompare(b.startTime))
            .map(class_ => (
              <div key={class_.id} className={`p-4 rounded-lg border ${class_.color}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{class_.subject}</h4>
                    <p className="text-sm mt-1">{class_.instructor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{class_.startTime} - {class_.endTime}</p>
                    <p className="text-sm mt-1">{class_.room}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;