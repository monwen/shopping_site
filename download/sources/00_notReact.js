const functionalComp = props => {
    console.log(`Hello ${props.name}`);
}

let userGenerated = "Properties";

const reactGenerated = {
    name: userGenerated
}

functionalComp(reactGenerated);

const classComp = {
    state: {
        count: 0
    },

    setState: function(newState) {
        this.state = newState
    }
};
