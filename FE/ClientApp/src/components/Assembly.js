import React, { Component } from 'react';
import ExpertService from '../service/ExpertService';

class Assembly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assemblyarr: [],
            searcharr: [],
            searchtext: ''
        };
    }

    componentDidMount() {
        this.fetchdata();
    }

    fetchdata() {
        const { data } = this.props; // Assuming you're passing the data prop correctly
        data.forEach(item => {
            const expid = item.expid.expid;
            ExpertService.getAssemblyList({ expid })
                .then((response) => {
                    this.setState(prevState => ({
                        assemblyarr: [...prevState.assemblyarr, ...response.data],
                        searcharr: [...prevState.assemblyarr, ...response.data]
                    }));
                })
                .catch();
        });
    }

    render() {
        return (
            <div>
                {this.state.searcharr.map((item, index) => (
                    <div key={index}>
                        <h2>Unit ID: {item.unitid}</h2>
                        <h3>Expert Info</h3>
                        {/* Render expert properties */}
                        
                        <h3>Ram Info</h3>
                        <p>Ram Name: {item.ram.proname}</p>
                        <p>Ram Price: {item.ram.price}</p>
                        {/* More ram properties */}
                        
                        {/* Similar code for other properties like ssd, cpu, etc. */}
                    </div>
                ))}
            </div>
        );
    }
}

export default Assembly;
