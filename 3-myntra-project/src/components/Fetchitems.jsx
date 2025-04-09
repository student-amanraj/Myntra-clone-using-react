import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(()=>{
if(fetchStatus.fetchDone)
      return;
    
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusAction. markFetchStarted());
    fetch("http://localhost:8081/items", { signal })
    .then((res)=>res.json())
    .then(({items})=>{
      dispatch(fetchStatusAction. markFetchDone());
      dispatch(fetchStatusAction.markFetchingFinished());

    dispatch(itemsActions.addInitialItems(items[0]));
    });
    return () => {
   
      controller.abort();
    };

  },[fetchStatus])
  return(
    <>
  
    </>
  )
};
export default Fetchitems;