export type cartSneaker = {
    id: number,
    imageName: string,
    title: string,
    price: number,
    count: number,
}

export interface CartState {
    items: cartSneaker[],
}