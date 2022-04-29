const cpuDecision = (handtypes: Array<string>): string =>{
    const indexOfHandType: number = Math.floor(
            (Math.random() * handtypes.length));

    return `${handtypes[Math.trunc(indexOfHandType)]}`;
}

export default cpuDecision;