// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/*!
 * Create an array of word objects, each representing a word in the cloud
 */
var word_array = [
{text: "biodiversity", weight: "157"},
{text: "rumen", weight: "119"},
{text: "E. Coli", weight: "49"},
{text: "dairy", weight: "48"},
{text: "fecal", weight: "46"},
{text: "diet", weight: "38"},
{text: "16S", weight: "37"},
{text: "metagenome", weight: "36"},
{text: "calf", weight: "31"},
{text: "disease state", weight: "31"},
{text: "beef", weight: "29"},
{text: "GIT", weight: "17"},
{text: "carcass", weight: "6"},
{text: "steer", weight: "5"},
{text: "hide", weight: "5"},
{text: "yak", weight: "5"},
{text: "milk", weight: "5"},
{text: "heifer", weight: "4"},
{text: "lactating", weight: "3"},
{text: "buffalo", weight: "2"},
{text: "bull", weight: "2"},
{text: "goat", weight: "2"},
{text: "ewes", weight: "1"},
{text: "postpartum", weight: "1"},
{text: "dairy farmers", weight: "1"},
{text: "GIT morphology", weight: "1"},
{text: "teat", weight: "1"},
{text: "udder", weight: "1"},
{text: "feedlot", weight: "1"},
{text: "lactating cows", weight: "1"},
{text: "transition period", weight: "1"},
{text: "biodivesity", weight: "1"}
    // ...as many words as you want
      ];

$(function() {
    // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
    $("#word-cloud").jQCloud(word_array);
});
