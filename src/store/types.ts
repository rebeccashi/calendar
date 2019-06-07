export interface Event {
    date: string,
    startTime: string,
    endTime: string,
    location: string,
    notes: string,
    username: string    //not alterable
};

export interface CalendarState {
    events: Event[]
}