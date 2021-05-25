import React from 'react';
 
// an App component that will serve as the parent for the rest of our application.
class SearchBar extends React.Component {
    // the constuctor runs automatically when the class is initialized
    constructor() {
    // Calling super() within that method lets us access this.state within the constructor, 
    // since our class is a subclass of React.Component.
        super();
        // if we want access to React's this.state in the constuctor,
        //  we need to make sure that our class
        //  is inheriting whatever properties are 
        // inside of the constructor of the parent ReactComponent.
        this.state = { term: '' }
        // We are also initializing our state here, 
        // letting our application know that it needs to be aware of our search term
    }

    // Every time react notices input change, it should fire an onChange event 
    // and pass the value —term— to the onInputChange() class method
    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }
    // 
    render() {
        return (
            // Every time we update our input, React's onChange property automatically fires.
            <div className="search">
                
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}
// The export makes our SearchBar available to import by other pieces of our application
// The default means that this module is only exporting one value — in this case, the class SearchBar.
export default SearchBar;