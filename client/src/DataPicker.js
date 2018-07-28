import React from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';

export class DataPicker extends React.Component {
    componentDidMount() {
        this.$node = $(this.refs.datepicker);

        this.$node.datepicker({
            // Get the incoming onChange func and we invoke it on the Sortable `change` event
            onSelect: (event, ui) => this.props.onChange(event, ui),
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return(
            <p>Date:
                <input ref="datepicker" type="text"/>
            </p>
        )
    }

    componentWillUnmount() {
        // Clean up the mess when the component unmounts
        this.$node.datepicker('destroy');
    }
}
