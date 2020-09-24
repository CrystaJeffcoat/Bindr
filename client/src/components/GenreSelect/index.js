// React
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import './styles.css';

const GenreSelect = ({ selectOptions, ...props }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="select-container">
            <FormControl variant="outlined" className={'formControl'}>
                <InputLabel id="">Genre</InputLabel>
                <Select labelId="" id="demo-simple-select-outlined" value={age} onChange={handleChange} label="Age">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default GenreSelect;
