import React from 'react';

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

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
          Assignment Marks in Pie Chart :
        </h2>

        <PieChart width={400} height={400}>
          <Pie
            dataKey="marks"
            startAngle={0}
            endAngle={360}
            data={assignmentMarks}
            outerRadius={100}
            fill="#8884d8"
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Assignment;
