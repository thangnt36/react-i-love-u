import React from 'react';
import MemorySection from './MemorySection';
import memoriesData from './memoriesData'; 
import './../css/App.css';

function groupByYear(memories) {
  return memories.reduce((acc, memory) => {
    let groupKey;
    if (!memory.date || memory.date.trim() === '') {
      // Gán nhóm đặc biệt cho các mốc không có ngày
      groupKey = 'truoc-yeu-nhau';
    } else {
      // Giả sử date có định dạng "dd/mm/yyyy"
      const parts = memory.date.split('/');
      groupKey = parts[2] || 'Unknown';
    }
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(memory);
    return acc;
  }, {});
}

function GroupedMemories() {
  const grouped = groupByYear(memoriesData);
  // Lấy các key và sắp xếp theo thứ tự: nhóm "truoc-yeu-nhau" đứng đầu, sau đó sắp xếp từ năm nhỏ đến năm lớn
  const years = Object.keys(grouped).sort((a, b) => {
    if (a === 'truoc-yeu-nhau') return -1;
    if (b === 'truoc-yeu-nhau') return 1;
    return parseInt(a) - parseInt(b);
  });

  return (
    <div>
      {years.map((year) => (
        // Gán id là group key để liên kết được với Nav
        <div key={year} id={year} className="memory-group">
          <h2 className="section-title text-center my-4">
            {year === 'truoc-yeu-nhau' ? 'Khi Chưa Gặp Nhau' : `Năm ${year}`}
          </h2>
          {grouped[year].map((memory) => (
            <MemorySection key={memory.id} {...memory} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GroupedMemories;
