import "./Search.css"

//hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

//components
import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";
import { Link } from "react-router-dom";

//redux
import { searchPhotos, like, desLike } from "../../slices/photoSlice";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
    const query = useQuery()
    const search = query.get("q");

    const dispatch = useDispatch();

    const resetMessage = useResetComponentMessage(dispatch);

    const {user} = useSelector(state => state.auth);
    const{photos, loading} = useSelector(state => state.photo);

    //Load photos
    useEffect(() => {
        dispatch(searchPhotos(search))
    },[search,dispatch])
     //Like a photo
    const handleLike = (photo) => {
        dispatch(like(photo._id))
        resetMessage()
    }

    //DesLike a photo
    const handleDesLike = (photo) => {
        dispatch(desLike(photo._id))
        resetMessage()
    }
    if(loading){
        return <p>Carregando...</p>
    }
  return (
    <div id="search">
        <h2>Você está buscnado por: {search}</h2>
        {photos && photos.map((photo) => (
        <div key={photo._id}>
          <PhotoItem photo={photo}/>
          <LikeContainer photo={photo} user={user} handleLike={handleLike} handleDesLike={handleDesLike}/>
          <Link className='btn' to={`/photos/${photo._id}`}>Ver mais</Link>
        </div>
      ))}
      {photos && photos.length === 0 && (
        <h2>Não foram encontrados resultados para a sua busca, <Link to={`/users/${user._id}`}>clique aqui</Link></h2>
      )}
    </div>
  )
}

export default Search