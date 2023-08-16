export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    REJECT = "reject"
}
interface Size {
    size: number,
    count: number,
}

export type Sneakers = {
    id: number,
    imageName: string,
    title: string,
    brand: string,
    price: number,
    rating: number,
    body: string,
    sizes: Size[],
}

export interface SneakerState {
    items: Sneakers[],
    status: Status
}