import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Assignment = () => {
  const assignmentMarks = [
    { assignment: 1, marks: 60 },
    { assignment: 2, marks: 59 },
    { assignment: 3, marks: 60 },
    { assignment: 4, marks: 60 },
    { assignment: 5, marks: 60 },
    { assignment: 6, marks: 60 },
    { assignment: 7, marks: 60 },
    { assignment: 8, marks: 60 },
  ];
  return (
    <div className="container mx-auto flex justify-center mt-16">
      <div>
        <h2 className="font-semibold underline mb-5 text-2xl text-center">
          Assignment Marks in Bar Chart :
        </h2>

        <LineChart
          width={500}
          height={300}
          data={assignmentMarks}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignment" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="marks" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default Assignment;
