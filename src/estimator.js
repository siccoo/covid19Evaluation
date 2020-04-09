const currentlyInfected = (reportedCases) = estimateCurrentlyInfected;
const infectionsByRequestedTime = (timeToElapse) = estimateProjectedInfections;


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
