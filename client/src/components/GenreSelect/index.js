// React
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import './styles.css';

const GenreSelect = ({ selectOptions, setGenre, ...props }) => {
    const [selectedGenre, setSelectedGenre] = React.useState('');

    const handleChange = (event) => {
        setSelectedGenre(event.target.value);
        setGenre(event.target.value);
    };
    return (
        <div className="select-container">
            <FormControl variant="outlined" className={'formControl'}>
                <InputLabel id="">Genre</InputLabel>
                <Select
                    labelId=""
                    id="demo-simple-select-outlined"
                    value={selectedGenre}
                    onChange={handleChange}
                    label="Genre">
                    {selectOptions.map((option, index) => (
                        <MenuItem key={`genre-${index}`} value={option.list_name_encoded}>
                            {option.display_name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default GenreSelect;
