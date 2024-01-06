import {makeAutoObservable} from 'mobx'

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Телефоны'},
            {id: 2, name: 'Планшеты'}
        ]
        this._brands = [
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Samsung'}
        ]
        this._products = [
            {
                id: 1,
                name: "mini 6",
                price: 24000,
                rating: 0,
                img: "7ff8aed5-4dd9-4649-ae09-f3f016feac68.jpg",
                createdAt: "2023-12-28T15:17:52.045Z",
                updatedAt: "2023-12-28T15:17:52.045Z",
                typeId: 2,
                brandId: 2
            },
            {
                id: 2,
                name: "Galaxy Tab S6",
                price: 13500,
                rating: 0,
                img: "21cc3296-4fa8-4334-a3bc-14af1be34f8d.jpg"
            },
            {
                id: 3,
                name: "Iphone 14 Pro Max",
                price: 45000,
                rating: 0,
                img: "ae5da4a5-e797-450a-a188-f4feb668ecff.jpg"

            },
            {
                id: 4,
                name: "Galaxy S23 Ultra",
                price: 50000,
                rating: 0,
                img: "f381f9f4-574e-4ccd-8f52-3bdcdba44f1f.jpg"
            }
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setProduct(products) {
        this._products = products
    }


    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get products() {
        return this._products
    }
}