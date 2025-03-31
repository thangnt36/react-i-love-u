const importAll = (r) => {
    let images = {};
    // Sắp xếp các key theo thứ tự số, giả sử tên file có dạng "img-1.jpg", "img-2.jpg",…
    const sortedKeys = r.keys().sort((a, b) => {
      const aMatch = a.match(/img-(\d+)/);
      const bMatch = b.match(/img-(\d+)/);
      const aNum = aMatch ? parseInt(aMatch[1], 10) : 0;
      const bNum = bMatch ? parseInt(bMatch[1], 10) : 0;
      return aNum - bNum;
    });
    sortedKeys.forEach((item, index) => {
      images[`img${index + 1}`] = r(item);
    });
    return images;
  };
  
  // Sử dụng regex không phân biệt chữ hoa chữ thường cho file jpg và jpeg
  const images = importAll(require.context('./../img/portfolio', false, /\.(jpe?g)$/i));
  
  export default images;
  