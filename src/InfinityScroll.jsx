import React, { useState } from "react";

const InfinityScroll = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loader = useRef(null);
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default InfinityScroll;
