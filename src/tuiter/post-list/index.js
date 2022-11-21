import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
  from "../../services/tuits-thunks";
import TuitsItem from "./post-item";


const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])
  return(
        <div>
          {
              loading &&
              <div>
                Loading...
              </div>
          }

          {

          tuits.map(tuits =>
              <TuitsItem tuits={tuits}/>
          )
        }
        </div>
   );
};
export default TuitsList;
