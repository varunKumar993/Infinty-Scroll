import React, { useCallback, useEffect, useState } from "react";

const InfinityScroll = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const fetchItems = useCallback(async()=>{
    const newItems = await fetchMoreItems(page);
    setItems(prev=>[...prev,newItems])
    setHasMore(newItems.length>0)
  },[page])
  useEffect(()=>{
    const observe = new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting && hasMore){
            setPage((prev)=> prev+ 1)
        }
    }
{threshold:1.0}
if(loader.current){
    ResizeObserver.observe(loader.current)
})
  })

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          <li key={index}>{item}</li>;
        })}
      </ul>
      <div ref={loader} className="loader" >
        {hasMore?'Loading more items':'No more items'}
      </div>
    </div>
  );
};

async function fetchMoreItems(page){
    const data = await new Promise((reslove)=>{
        setTimeout(()=>{
            const newItems = Array.from({length:10},(__,i)=>`Item ${(page-1)*10}+i+1}`)
       reslove(newItems) },1000)
    })
}

export default InfinityScroll;
