import React from 'react';
import { Button} from 'react-bootstrap';
import {Filters} from '../Filters';

export const FilterBar = (props) =>  {
        function filterClick(e) {
            props.onFilter(e.target.value);
        }

        return (
            <div>
                <Button value={Filters.ALL} onClick={filterClick}>
                    {Filters.ALL}
                </Button>
                <Button value={Filters.ACTIVE} onClick={filterClick}>
                    {Filters.ACTIVE}
                </Button>
                <Button value={Filters.COMPLETED} onClick={filterClick}>
                    {Filters.COMPLETED}
                </Button>
            </div>
        )
}
