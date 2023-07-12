

module.exports = {
    performance_index_calculation: (post_data,sample_text) => {
        let {test_paragraph} = post_data
        let {paragraph} = sample_text
        let obj = {}
        obj.test_key_depression = test_paragraph.trim().split("").length
        obj.sample_key_depression = paragraph.trim().split("").length
        obj.test_words_count = test_paragraph.split(" ").length
        obj.sample_words_count = paragraph.split(" ").length
    }
}