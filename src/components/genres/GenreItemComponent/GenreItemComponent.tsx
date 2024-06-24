import React, {FC} from 'react';
import {IGenre} from "../../../Interfaces/IGenre";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/moviesSlice";
import {LimeButton} from "../../../StyledElementsMUI/StyledElementsMUI";


interface IProps {
    genre: IGenre
}

const GenreItemComponent: FC<IProps> = ({genre}) => {

    const [query, setQuery] = useSearchParams({page: "1", with_genres: null});
    const dispatch = useAppDispatch();

    const changeGenreId = (genreId: number) => {
        dispatch(movieActions.changeGenre(genre.id));
        dispatch(movieActions.changeFilmName(null));
        setQuery({page: "1", with_genres: String(genreId)})
    }

    return (
        <div>
            <LimeButton onClick={() => changeGenreId(genre.id)} variant="outlined" size="small"
                        sx={{margin: "4px"}}>{genre.name}</LimeButton>
        </div>
    );
};

export default GenreItemComponent;