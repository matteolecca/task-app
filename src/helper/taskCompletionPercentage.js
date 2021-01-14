const MILLISECOND_IN_DAY = 86400000
export const  getCompletionPercentage = task =>{
        const startDate = task.start_date
        const endDate = task.end_date
        const diffStartEnd = (new Date(endDate) - new Date(startDate))/ MILLISECOND_IN_DAY
        const diffTodayEnd = (new Date() - new Date(startDate)) / MILLISECOND_IN_DAY
        return (diffTodayEnd / diffStartEnd * 100).toFixed(0)
}