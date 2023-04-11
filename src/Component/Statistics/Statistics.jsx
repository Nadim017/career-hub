import React from 'react';

import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const Statistics = () => {
  const assignmentMarks = [
    { assignment: 'assigment-1', marks: 60 },
    { assignment: 'assigment-2', marks: 59 },
    { assignment: 'assigment-3', marks: 60 },
    { assignment: 'assigment-4', marks: 60 },
    { assignment: 'assigment-5', marks: 60 },
    { assignment: 'assigment-6', marks: 60 },
    { assignment: 'assigment-7', marks: 60 },
    { assignment: 'assigment-8', marks: 60 },
  ];
  return (
    <div className="container mx-auto flex justify-center mt-16">
      <div>
        <h2 className="font-semibold underline mb-5 text-2xl text-center">
          Assignment Marks in Pie Chart :
        </h2>

        <PieChart width={400} height={400}>
          <Pie
            data={assignmentMarks}
            dataKey="marks"
            nameKey="assignment"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          ></Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
