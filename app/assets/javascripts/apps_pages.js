// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/*!
 * Create an array of word objects, each representing a word in the cloud
 */
var word_array = [
{text: "vaginal", weight: "315"},
{text: "microbiota", weight: "171"},
{text: "bacterial", weight: "171"},
{text: "microbiome", weight: "133"},
{text: "bv", weight: "117"},
{text: "sample", weight: "110"},
{text: "community", weight: "110"},
{text: "lactobacillus", weight: "94"},
{text: "sequence", weight: "92"},
{text: "species", weight: "89"},
{text: "associate", weight: "80"},
{text: "microbial", weight: "75"},
{text: "infection", weight: "75"},
{text: "bacteria", weight: "73"},
{text: "health", weight: "67"},
{text: "diversity", weight: "65"},
{text: "healthy", weight: "63"},
{text: "disease", weight: "62"},
{text: "composition", weight: "61"},
{text: "include", weight: "53"},
{text: "result", weight: "52"},
{text: "vaginalis", weight: "52"},
{text: "gene", weight: "49"},
{text: "increase", weight: "46"},
{text: "datum", weight: "45"},
{text: "analysis", weight: "43"},
{text: "clinical", weight: "43"},
{text: "vagina", weight: "42"},
{text: "risk", weight: "42"},
{text: "infant", weight: "42"},
{text: "hiv", weight: "42"},
{text: "rrna", weight: "42"},
{text: "vaginosis", weight: "41"},
{text: "role", weight: "41"},
{text: "characterize", weight: "41"},
{text: "abundance", weight: "41"},
{text: "birth", weight: "40"},
{text: "site", weight: "37"},
{text: "method", weight: "37"},
{text: "compare", weight: "37"},
{text: "individual", weight: "36"},
{text: "tract", weight: "36"},
{text: "oral", weight: "36"},
{text: "taxon", weight: "34"},
{text: "influence", weight: "34"},
{text: "identify", weight: "34"},
{text: "provide", weight: "34"},
{text: "profile", weight: "34"},
{text: "habitat", weight: "33"},
{text: "treatment", weight: "33"},
{text: "intestinal", weight: "32"},
{text: "genus", weight: "32"},
{text: "quot", weight: "32"},
{text: "effect", weight: "32"},
{text: "molecular", weight: "30"},
{text: "pregnancy", weight: "30"},
{text: "host", weight: "30"},
{text: "dominate", weight: "30"},
{text: "potential", weight: "29"},
{text: "'s", weight: "29"},
{text: "factor", weight: "29"},
{text: "preterm", weight: "29"},
{text: "delivery", weight: "29"},
{text: "significant", weight: "29"},
{text: "among", weight: "28"},
{text: "detect", weight: "28"},
{text: "microbe", weight: "28"},
{text: "level", weight: "27"},
{text: "transmission", weight: "27"},
{text: "association", weight: "27"},
{text: "immune", weight: "27"},
{text: "gut", weight: "26"},
{text: "demonstrate", weight: "26"},
{text: "reveal", weight: "26"},
{text: "determine", weight: "26"},
{text: "significantly", weight: "26"},
{text: "difference", weight: "25"},
{text: "organism", weight: "25"},
{text: "subject", weight: "24"},
{text: "swab", weight: "24"},
{text: "specimen", weight: "24"},
{text: "common", weight: "23"},
{text: "development", weight: "23"},
{text: "evaluate", weight: "23"},
{text: "lt", weight: "22"},
{text: "flora", weight: "22"},
{text: "genital", weight: "22"},
{text: "base", weight: "22"},
{text: "reduce", weight: "22"},
{text: "presence", weight: "22"},
{text: "project", weight: "22"},
{text: "ph", weight: "22"},
{text: "define", weight: "22"},
{text: "condition", weight: "21"},
{text: "total", weight: "21"},
{text: "major", weight: "21"},
{text: "population", weight: "21"},
{text: "region", weight: "21"},
{text: "collect", weight: "21"},
{text: "colonization", weight: "21"},
{text: "outcome", weight: "20"},
{text: "dna", weight: "20"},
{text: "diverse", weight: "20"},
{text: "taxonomic", weight: "20"},
{text: "score", weight: "20"},
{text: "structure", weight: "20"},
{text: "crispatus", weight: "20"},
{text: "assay", weight: "20"},
{text: "cluster", weight: "20"},
{text: "contain", weight: "19"},
{text: "system", weight: "19"},
{text: "indicate", weight: "19"},
{text: "patient", weight: "19"},
{text: "activity", weight: "19"},
{text: "variation", weight: "19"},
{text: "female", weight: "19"},
{text: "protein", weight: "19"},
{text: "nugent", weight: "19"},
{text: "develop", weight: "18"},
{text: "vary", weight: "18"},
{text: "milk", weight: "18"},
{text: "antibiotic", weight: "18"},
{text: "complex", weight: "18"},
{text: "analyse", weight: "18"},
{text: "sexually", weight: "18"},
{text: "represent", weight: "18"},
{text: "specific", weight: "18"},
{text: "higher", weight: "17"},
{text: "culture", weight: "17"},
{text: "10", weight: "17"},
{text: "pcr", weight: "17"},
{text: "observe", weight: "17"},
{text: "pyrosequencing", weight: "17"},
{text: "design", weight: "17"},
{text: "95", weight: "17"},
{text: "support", weight: "17"},
{text: "future", weight: "17"},
{text: "jensenii", weight: "17"},
{text: "trial", weight: "17"},
{text: "differ", weight: "16"},
{text: "gardnerella", weight: "16"},
{text: "stool", weight: "16"},
{text: "response", weight: "16"},
{text: "investigate", weight: "16"},
{text: "epithelial", weight: "16"},
{text: "cytokine", weight: "15"},
{text: "years", weight: "15"},
{text: "mode", weight: "15"},
{text: "humans", weight: "15"},
{text: "neonate", weight: "15"},
{text: "inflammatory", weight: "15"},
{text: "review", weight: "15"},
{text: "addition", weight: "15"},
{text: "ci", weight: "15"},
{text: "infertility", weight: "15"},
{text: "probiotic", weight: "15"},
{text: "acquisition", weight: "15"},
{text: "commensal", weight: "15"},
{text: "recent", weight: "15"},
{text: "cohort", weight: "15"},
{text: "rate", weight: "15"},
{text: "examine", weight: "14"},
{text: "days", weight: "14"},
{text: "hmp", weight: "14"},
{text: "occur", weight: "14"},
{text: "impact", weight: "14"},
{text: "sexual", weight: "14"},
{text: "ecosystem", weight: "14"},
{text: "iners", weight: "14"},
{text: "apply", weight: "14"},
{text: "member", weight: "14"},
{text: "detection", weight: "14"},
{text: "process", weight: "14"},
{text: "describe", weight: "14"},
{text: "current", weight: "14"},
{text: "cycle", weight: "14"},
{text: "decrease", weight: "13"},
{text: "isolate", weight: "13"},
{text: "analyze", weight: "13"},
{text: "marker", weight: "13"},
{text: "stable", weight: "13"},
{text: "sneathia", weight: "13"},
{text: "strain", weight: "13"},
{text: "test", weight: "13"},
{text: "core", weight: "13"},
{text: "newborn", weight: "13"},
{text: "previously", weight: "13"},
{text: "transmit", weight: "13"},
{text: "research", weight: "13"},
{text: "affect", weight: "13"},
{text: "genome", weight: "13"},
{text: "enable", weight: "13"},
{text: "environment", weight: "13"},
{text: "macaque", weight: "13"},
{text: "metagenomic", weight: "13"},
{text: "technique", weight: "13"},
{text: "antimicrobial", weight: "13"},
{text: "origin", weight: "12"},
{text: "reproductive", weight: "12"},
{text: "multiple", weight: "12"},
{text: "sti", weight: "12"},
{text: "similar", weight: "12"},
{text: "distinct", weight: "12"},
{text: "participant", weight: "12"},
{text: "advance", weight: "12"},
{text: "secretion", weight: "12"},
{text: "quantitative", weight: "12"},
{text: "gestation", weight: "12"},
{text: "application", weight: "12"},
{text: "model", weight: "12"},
{text: "bvab", weight: "12"},
{text: "obtain", weight: "12"},
{text: "measure", weight: "12"},
{text: "loss", weight: "12"},
{text: "relate", weight: "12"},
{text: "cs", weight: "12"},
{text: "knowledge", weight: "12"},
{text: "gel", weight: "12"},
{text: "pathogen", weight: "12"},
{text: "microorganism", weight: "12"},
{text: "additional", weight: "11"},
{text: "link", weight: "11"},
{text: "uterine", weight: "11"},
{text: "acid", weight: "11"},
{text: "metabolic", weight: "11"},
{text: "diagnostic", weight: "11"},
{text: "intrauterine", weight: "11"},
{text: "status", weight: "11"},
{text: "urine", weight: "11"},
{text: "evidence", weight: "11"},
{text: "gastrointestinal", weight: "11"},
{text: "18", weight: "11"},
{text: "novel", weight: "11"},
{text: "limit", weight: "11"},
{text: "target", weight: "11"},
{text: "correlate", weight: "11"},
{text: "wash", weight: "11"},
{text: "inflammation", weight: "11"},
{text: "criterion", weight: "11"},
{text: "adverse", weight: "11"},
{text: "colonize", weight: "11"},
{text: "prevotella", weight: "11"},
{text: "male", weight: "11"},
{text: "cervicovaginal", weight: "11"},
{text: "mechanism", weight: "11"},
{text: "reference", weight: "11"},
{text: "deliver", weight: "11"},
{text: "atopobium", weight: "11"},
{text: "establish", weight: "11"},
{text: "spp", weight: "11"},
{text: "qpcr", weight: "11"},
{text: "identification", weight: "11"},
{text: "versus", weight: "10"},
{text: "rdna", weight: "10"},
{text: "ecological", weight: "10"},
{text: "prevalence", weight: "10"},
{text: "various", weight: "10"},
{text: "involve", weight: "10"},
{text: "useful", weight: "10"},
{text: "hpv", weight: "10"},
{text: "rapidly", weight: "10"},
{text: "rna", weight: "10"},
{text: "assess", weight: "10"},
{text: "anaerobe", weight: "10"},
{text: "ribosomal", weight: "10"},
{text: "subgroup", weight: "10"},
{text: "perform", weight: "10"},
{text: "gram", weight: "10"},
{text: "equol", weight: "10"},
{text: "mucosal", weight: "10"},
{text: "microbicide", weight: "10"},
{text: "richness", weight: "10"},
{text: "cervical", weight: "10"},
{text: "phylogenetic", weight: "10"},
{text: "abundant", weight: "10"},
{text: "database", weight: "10"},
{text: "range", weight: "10"},
{text: "derive", weight: "9"},
{text: "growth", weight: "9"},
{text: "partner", weight: "9"},
{text: "functional", weight: "9"},
{text: "prevent", weight: "9"},
{text: "gt", weight: "9"},
{text: "strongly", weight: "9"},
{text: "temporal", weight: "9"},
{text: "intestine", weight: "9"},
{text: "exposure", weight: "9"},
{text: "agent", weight: "9"},
{text: "estimate", weight: "9"},
{text: "likely", weight: "9"},
{text: "predominant", weight: "9"},
{text: "abnormal", weight: "9"},
{text: "technology", weight: "9"},
{text: "diet", weight: "9"},
{text: "anaerobic", weight: "9"},
{text: "contribute", weight: "9"},
{text: "microflora", weight: "9"},
{text: "report", weight: "9"},
{text: "median", weight: "9"},
{text: "maternal", weight: "9"},
{text: "meconium", weight: "9"},
{text: "urogenital", weight: "9"},
{text: "acquire", weight: "9"},
{text: "function", weight: "9"},
{text: "constitute", weight: "9"},
{text: "standard", weight: "9"},
{text: "therefore", weight: "9"},
{text: "acidform", weight: "9"},
{text: "contrast", weight: "9"},
{text: "generate", weight: "9"},
{text: "count", weight: "9"},
{text: "relative", weight: "9"},
{text: "stain", weight: "9"},
{text: "diagnosis", weight: "9"},
{text: "overall", weight: "9"},
{text: "cvl", weight: "9"},
{text: "microbiotas", weight: "9"},
{text: "proportion", weight: "9"},
{text: "source", weight: "9"},
{text: "concentration", weight: "9"},
{text: "poorly", weight: "9"},
{text: "pattern", weight: "9"},
{text: "intermediate", weight: "9"},
{text: "greater", weight: "8"},
{text: "implication", weight: "8"},
{text: "probe", weight: "8"},
{text: "due", weight: "8"},
{text: "fecal", weight: "8"},
{text: "mucosa", weight: "8"},
{text: "disorder", weight: "8"},
{text: "tool", weight: "8"},
{text: "bifidobacterium", weight: "8"},
{text: "term", weight: "8"},
{text: "baboon", weight: "8"},
{text: "potentially", weight: "8"},
{text: "product", weight: "8"},
{text: "prevalent", weight: "8"},
{text: "feature", weight: "8"},
{text: "cow", weight: "8"},
{text: "perinatal", weight: "8"},
{text: "archaea", weight: "8"},
{text: "aim", weight: "8"},
{text: "chain", weight: "8"},
{text: "mediator", weight: "8"},
{text: "vaginally", weight: "8"},
{text: "enterotypes", weight: "8"},
{text: "11", weight: "8"},
{text: "immunity", weight: "8"},
{text: "pathway", weight: "8"},
{text: "lactic", weight: "8"},
{text: "16", weight: "8"},
{text: "strategy", weight: "8"},
{text: "period", weight: "8"},
{text: "gasseri", weight: "8"},
{text: "unique", weight: "8"},
{text: "despite", weight: "8"},
{text: "cavity", weight: "8"},
{text: "information", weight: "8"},
{text: "surface", weight: "8"},
{text: "sp", weight: "8"},
{text: "available", weight: "8"},
{text: "investigation", weight: "8"},
{text: "whereas", weight: "8"},
{text: "vmb", weight: "8"},
{text: "longitudinal", weight: "8"},
{text: "average", weight: "8"},
{text: "microbicides", weight: "8"},
{text: "relatively", weight: "8"},
{text: "importance", weight: "8"},
{text: "dryness", weight: "7"},
{text: "streptococcus", weight: "7"},
{text: "inhabit", weight: "7"},
{text: "million", weight: "7"},
{text: "staphylococcus", weight: "7"},
{text: "reaction", weight: "7"},
{text: "employ", weight: "7"},
{text: "menstrual", weight: "7"},
{text: "therapy", weight: "7"},
{text: "consistent", weight: "7"},
{text: "vivo", weight: "7"},
{text: "physiological", weight: "7"},
{text: "mg", weight: "7"},
{text: "exist", weight: "7"},
{text: "mtct", weight: "7"},
{text: "candidate", weight: "7"},
{text: "correlation", weight: "7"},
{text: "positive", weight: "7"},
{text: "assessment", weight: "7"},
{text: "signature", weight: "7"},
{text: "niche", weight: "7"},
{text: "absence", weight: "7"},
{text: "bv-associated", weight: "7"},
{text: "coli", weight: "7"},
{text: "highly", weight: "7"},
{text: "emerge", weight: "7"},
{text: "comprise", weight: "7"},
{text: "regard", weight: "7"},
{text: "adult", weight: "7"},
{text: "improve", weight: "7"},
{text: "leptotrichia", weight: "7"},
{text: "mouse", weight: "7"},
{text: "conception", weight: "7"},
{text: "moreover", weight: "7"},
{text: "reservoir", weight: "7"},
{text: "mainly", weight: "7"},
{text: "14", weight: "7"},
{text: "array", weight: "7"},
{text: "ecology", weight: "7"},
{text: "confirm", weight: "7"},
{text: "biofilms", weight: "7"},
{text: "gmh", weight: "7"},
{text: "variable", weight: "7"},
{text: "overweight", weight: "7"},
{text: "recently", weight: "7"},
{text: "high-throughput", weight: "7"},
{text: "respectively", weight: "7"},
{text: "maintain", weight: "7"},
{text: "specifically", weight: "7"},
{text: "biofilm", weight: "7"},
{text: "produce", weight: "7"},
{text: "stability", weight: "7"},
{text: "placebo", weight: "7"},
{text: "phenotype", weight: "7"},
{text: "exhibit", weight: "6"},
{text: "tissue", weight: "6"},
{text: "frequently", weight: "6"},
{text: "conclusion", weight: "6"},
{text: "deviation", weight: "6"},
{text: "25", weight: "6"},
{text: "unclear", weight: "6"},
{text: "drug", weight: "6"},
{text: "microbiomes", weight: "6"},
{text: "dairy", weight: "6"},
{text: "alter", weight: "6"},
{text: "physiology", weight: "6"},
{text: "critical", weight: "6"},
{text: "22", weight: "6"},
{text: "variety", weight: "6"},
{text: "symptom", weight: "6"},
{text: "susceptibility", weight: "6"},
{text: "dmpa", weight: "6"},
{text: "volunteer", weight: "6"},
{text: "datasets", weight: "6"},
{text: "enrollment", weight: "6"},
{text: "distribution", weight: "6"},
{text: "atrophy", weight: "6"},
{text: "exclusively", weight: "6"},
{text: "menses", weight: "6"},
{text: "saliva", weight: "6"},
{text: "bactericidal", weight: "6"},
{text: "particularly", weight: "6"},
{text: "species-level", weight: "6"},
{text: "environmental", weight: "6"},
{text: "gradient", weight: "6"},
{text: "require", weight: "6"},
{text: "primer", weight: "6"},
{text: "defense", weight: "6"},
{text: "ethnic", weight: "6"},
{text: "interval", weight: "6"},
{text: "practice", weight: "6"},
{text: "select", weight: "6"},
{text: "comprehensive", weight: "6"},
{text: "nature", weight: "6"},
{text: "coc", weight: "6"},
{text: "undergo", weight: "6"},
{text: "otus", weight: "6"},
{text: "nuclease", weight: "6"},
{text: "material", weight: "6"},
{text: "serve", weight: "6"},
{text: "complication", weight: "6"},
{text: "methodology", weight: "6"},
{text: "particular", weight: "6"},
{text: "neonatal", weight: "6"},
{text: "hormonal", weight: "6"},
{text: "bmi", weight: "6"},
{text: "effort", weight: "6"},
{text: "polymerase", weight: "6"},
{text: "baseline", weight: "6"},
{text: "dietary", weight: "6"},
{text: "ivf", weight: "6"},
{text: "polymicrobial", weight: "6"},
{text: "menstruation", weight: "6"},
{text: "enrol", weight: "6"},
{text: "follow-up", weight: "6"},
{text: "nih", weight: "6"},
{text: "biological", weight: "6"},
{text: "multiplex", weight: "6"},
{text: "advantage", weight: "6"},
{text: "lack", weight: "6"},
{text: "opportunity", weight: "6"},
{text: "rm", weight: "6"},
{text: "failure", weight: "6"},
{text: "experience", weight: "6"},
{text: "syndrome", weight: "6"},
{text: "diagnose", weight: "6"},
{text: "lesion", weight: "6"},
{text: "microarray", weight: "6"},
{text: "approximately", weight: "6"},
{text: "breast-feed", weight: "6"},
{text: "thus", weight: "6"},
{text: "highlight", weight: "6"},
{text: "chemokines", weight: "6"},
{text: "previous", weight: "6"},
{text: "subset", weight: "6"},
{text: "safety", weight: "6"},
{text: "section", weight: "6"},
{text: "facilitate", weight: "6"},
{text: "receive", weight: "6"},
{text: "soy", weight: "6"},
{text: "culture-independent", weight: "5"},
{text: "dataset", weight: "5"},
{text: "disruption", weight: "5"},
{text: "emphasize", weight: "5"},
{text: "bifidobacteria", weight: "5"},
{text: "pelvic", weight: "5"},
{text: "fully", weight: "5"},
{text: "microscopy", weight: "5"},
{text: "administration", weight: "5"},
{text: "therapeutic", weight: "5"},
{text: "24", weight: "5"},
{text: "discus", weight: "5"},
{text: "adhesion", weight: "5"},
{text: "rapid", weight: "5"},
{text: "classification", weight: "5"},
{text: "asian", weight: "5"},
{text: "alteration", weight: "5"},
{text: "cancer", weight: "5"},
{text: "clindamycin", weight: "5"},
{text: "primary", weight: "5"},
{text: "clone", weight: "5"},
{text: "etiology", weight: "5"},
{text: "shape", weight: "5"},
{text: "degradation", weight: "5"},
{text: "enzyme", weight: "5"},
{text: "electrophoresis", weight: "5"},
{text: "dgge", weight: "5"},
{text: "compose", weight: "5"},
{text: "harbor", weight: "5"},
{text: "phylum", weight: "5"},
{text: "elucidate", weight: "5"},
{text: "fusobacteria", weight: "5"},
{text: "fluid", weight: "5"},
{text: "similarly", weight: "5"},
{text: "explore", weight: "5"},
{text: "context", weight: "5"},
{text: "protocol", weight: "5"},
{text: "express", weight: "5"},
{text: "receptor", weight: "5"},
{text: "activation", weight: "5"},
{text: "production", weight: "5"},
{text: "40", weight: "5"},
{text: "account", weight: "5"},
{text: "experiment", weight: "5"},
{text: "numerous", weight: "5"},
{text: "antifungal", weight: "5"},
{text: "clinically", weight: "5"},
{text: "protective", weight: "5"},
{text: "persistence", weight: "5"},
{text: "anti-inflammatory", weight: "5"},
{text: "normally", weight: "5"},
{text: "bacteroides", weight: "5"},
{text: "significance", weight: "5"},
{text: "broad", weight: "5"},
{text: "13", weight: "5"},
{text: "natural", weight: "5"},
{text: "infancy", weight: "5"},
{text: "plaque", weight: "5"},
{text: "trachomatis", weight: "5"},
{text: "establishment", weight: "5"},
{text: "active", weight: "5"},
{text: "similarity", weight: "5"},
{text: "illumina", weight: "5"},
{text: "larger", weight: "5"},
{text: "observation", weight: "5"},
{text: "lavage", weight: "5"},
{text: "100", weight: "5"},
{text: "30", weight: "5"},
{text: "correspond", weight: "5"},
{text: "aptamer", weight: "5"},
{text: "sex", weight: "5"},
{text: "metabolite", weight: "5"},
{text: "screen", weight: "5"},
{text: "combine", weight: "5"},
{text: "exclude", weight: "5"},
{text: "majority", weight: "5"},
{text: "variability", weight: "5"},
{text: "asymptomatic", weight: "5"},
{text: "article", weight: "5"},
{text: "discuss", weight: "5"},
{text: "formula-fed", weight: "5"},
{text: "introduce", weight: "5"},
{text: "innate", weight: "5"},
{text: "digestive", weight: "5"},
{text: "comparison", weight: "5"},
{text: "promote", weight: "5"},
{text: "national", weight: "5"},
{text: "pregnant", weight: "5"},
{text: "quantify", weight: "5"},
{text: "vsl", weight: "5"},
{text: "milieu", weight: "5"},
{text: "micro-organism", weight: "5"},
{text: "ethnicity", weight: "5"},
{text: "independent", weight: "5"},
{text: "self-collected", weight: "5"},
{text: "trace", weight: "5"},
{text: "content", weight: "5"},
{text: "caucasian", weight: "5"},
{text: "index", weight: "5"},
{text: "randomize", weight: "5"},
{text: "amplify", weight: "5"},
{text: "prove", weight: "5"},
{text: "forensic", weight: "5"},
{text: "objective", weight: "5"},
{text: "ptb", weight: "5"},
{text: "history", weight: "5"}
    // ...as many words as you want
      ];

$(function() {
    // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
    $("#word-cloud").jQCloud(word_array);
});
