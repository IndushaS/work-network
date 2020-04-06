import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
 
export default class Gantt extends Component {
    componentDidMount() {
        gantt.config.xml_date = "%Y-%m-%d %H:%i";
        const { tasks } = this.props;
        gantt.init(this.ganttContainer);
        gantt.parse(tasks);
    }

    render() {
       return (
           <div
                ref={ (input) => { this.ganttContainer = input } }
                style={ { width: '700px', height: '250px',background:'red' } }
            ></div>
       );
    }
}