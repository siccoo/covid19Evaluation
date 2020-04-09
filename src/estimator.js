const covid19ImpactEstimator = (reportedCases) => {
    const currentlyInfected = reportedCases * 10;
    return currentlyInfected = impact.currentlyInfected; 
};


const covid19ImpactEstimator = (data) => {
    const estimator = chain(
        // CHALLENGE ONE
        estimateCurrentlyInfected,
        estimateProjectedInfections,

        // CHALLENGE TWO
        estimateSevereCases,
        estimateBedSpaceAvailability,

        // CHALLENGE THREE
        estimateCasesForICU,
        estimateCasesForVentilators,
        estimateDollarsInFlight
    );

    return estimator ({
        data,
        impact: {},
        severeImpact: {}
    });
};

export default covid19ImpactEstimator;
