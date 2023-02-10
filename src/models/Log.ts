import LogRecord from './LogRecord';

export default interface Log {
    id: string,
    title: string,
    link: string,
    targetBpm: number,
    tags: string[],
    records: LogRecord[]
}