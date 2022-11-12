/* import service api for thunk method */
import GetThunk from './GetThunks';
import PostThunk from './PostThunks';

/* service get */
const apiGetListJobs = (path, config) => GetThunk(path, config);
/* service post */

/* declare routing */
const Service = {
  apiGetListJobs,
};

export default Service;
