

import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './StudentResults.css';

const StudentResults = () => {
  const semesterResults = [
    { semester: 'Sem 1', GPA: 3.8, credits: 15 },
    { semester: 'Sem 2', GPA: 3.6, credits: 16 },
    { semester: 'Sem 3', GPA: 3.9, credits: 15 },
    { semester: 'Sem 4', GPA: 3.7, credits: 17 }
  ];

  const courseResults = [
    { course: 'GUI programming', grade: 'A', score: 92 },
    { course: 'Networking', grade: 'A-', score: 88 },
    { course: 'Data Structure', grade: 'A+', score: 96 },
    { course: 'Telecommunication', grade: 'B+', score: 85 }
  ];

  return (
    <div className="dashboard">
      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card purple">
          <h3>Average GPA</h3>
          <p>3.75</p>
        </div>
        <div className="summary-card blue">
          <h3>Total Credits</h3>
          <p>63</p>
        </div>
        <div className="summary-card green">
          <h3>Standing</h3>
          <p>Excellent</p>
        </div>
      </div>

      {/* GPA Trend Chart */}
      <div className="chart-container">
        <h3>GPA Trend</h3>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={semesterResults}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="semester" stroke="#64748b" />
              <YAxis domain={[0, 4]} stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="GPA" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: "#8b5cf6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Course Performance Chart */}
      <div className="chart-container">
        <h3>Course Performance</h3>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={courseResults}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="course" stroke="#64748b" />
              <YAxis domain={[0, 100]} stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Results Table */}
      <div className="table-container">
        <h3>Current Semester Grades</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
                <th>Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {courseResults.map((course, index) => (
                <tr key={index}>
                  <td>{course.course}</td>
                  <td>{course.grade}</td>
                  <td>{course.score}%</td>
                  <td>
                    <span className="status-badge">
                      Passed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentResults;