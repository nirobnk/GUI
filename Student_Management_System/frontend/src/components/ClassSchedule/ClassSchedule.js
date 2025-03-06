import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, User } from 'lucide-react';
import './ClassSchedule.css';

const ClassSchedule = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const scheduleData = [
    {
      id: 1,
      subject: 'Programming',
      day: 'Monday',
      startTime: '09:00',
      endTime: '10:30',
      room: 'Room 101',
      instructor: 'Dr. Rajitha',
      colorClass: 'class-blue'
    },
    {
      id: 2,
      subject: 'Complex analysis',
      day: 'Monday',
      startTime: '11:00',
      endTime: '12:30',
      room: 'Lab 203',
      instructor: 'Prof. Wagachchi',
      colorClass: 'class-purple'
    },
    {
      id: 3,
      subject: 'Computer Networking',
      day: 'Tuesday',
      startTime: '10:00',
      endTime: '11:30',
      room: 'Lab 105',
      instructor: 'Dr. Keerthi Rathne',
      colorClass: 'class-green'
    },
    {
      id: 4,
      subject: 'GUI programming',
      day: 'Wednesday',
      startTime: '14:00',
      endTime: '15:30',
      room: 'Lab 302',
      instructor: 'Dr.Yugani',
      colorClass: 'class-yellow'
    },
    {
      id: 5,
      subject: 'English for Engineering',
      day: 'Thursday',
      startTime: '13:00',
      endTime: '14:30',
      room: 'Room 202',
      instructor: 'Dr. Batuwatta',
      colorClass: 'class-pink'
    }
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

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

  const getDaySchedule = (day) => {
    return scheduleData
      .filter((class_) => class_.day === day)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  const ClassCard = ({ class_ }) => (
    <div className={`class-card ${class_.colorClass}`}>
      <div className="class-card-header">
        <div className="class-info">
          <h4>{class_.subject}</h4>
          <p>{class_.instructor}</p>
        </div>
        <div className="class-time">
          <p>{class_.startTime} - {class_.endTime}</p>
          <p>{class_.room}</p>
        </div>
      </div>
      <div className="class-details">
        <div className="detail-item">
          <Clock className="icon" />
          <span>{class_.startTime} - {class_.endTime}</span>
        </div>
        <div className="detail-item">
          <MapPin className="icon" />
          <span>{class_.room}</span>
        </div>
        <div className="detail-item">
          <User className="icon" />
          <span>{class_.instructor}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="schedule-container">
      <div className="schedule-header-container">
        <div className="schedule-header">
          <h2>
            <Calendar className="calendar-icon" />
            Class Schedule
          </h2>
          <div className="week-navigation">
            <button onClick={getPrevWeek} className="nav-button">
              <ChevronLeft />
            </button>
            <span className="current-week">
              Week of {currentWeek.toLocaleDateString()}
            </span>
            <button onClick={getNextWeek} className="nav-button">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="days-container">
          {days.map((day) => (
            <div key={day} className="day-section">
              <h3>{day}</h3>
              <div className="classes-container">
                {getDaySchedule(day).length > 0 ? (
                  getDaySchedule(day).map((class_) => (
                    <ClassCard key={class_.id} class_={class_} />
                  ))
                ) : (
                  <div className="no-classes">
                    No classes scheduled for {day}.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="today-classes">
        <h3>Today's Classes</h3>
        <div className="classes-container">
          {scheduleData
            .filter((class_) => class_.day === days[new Date().getDay() - 1])
            .sort((a, b) => a.startTime.localeCompare(b.startTime))
            .map((class_) => (
              <ClassCard key={class_.id} class_={class_} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;