// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/*!
 * Create an array of word objects, each representing a word in the cloud
 */
var word_array = [
{text: "Numerous", weight: "4"},
{text: "quantitative", weight: "31"},
{text: "PCR", weight: "54"},
{text: "assays", weight: "21"},

{text: "microbial", weight: "226"},
{text: "fecal", weight: "104"},
{text: "source", weight: "42"},
{text: "tracking", weight: "4"},
{text: "MST", weight: "6"},
{text: "developed", weight: "36"},

{text: "evaluated", weight: "44"},

{text: "recent", weight: "7"},
{text: "years", weight: "12"},
{text: "Widespread", weight: "1"},
{text: "application", weight: "21"},

{text: "hindered", weight: "1"},


{text: "lack", weight: "5"},

{text: "knowledge", weight: "18"},
{text: "regarding", weight: "8"},

{text: "geographical", weight: "3"},
{text: "stability", weight: "11"},
{text: "hence", weight: "6"},
    // ...as many words as you want
      ];

$(function() {
    // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
    $("#word-cloud").jQCloud(word_array);
});
