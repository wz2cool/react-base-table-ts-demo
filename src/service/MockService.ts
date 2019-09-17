import { Restaurant } from "../model/Restaurant";

export class MockService {

    private constructor() {
        // hide constructor
    }

    public static instance: MockService = new MockService();

    public static get Instance() {
        return this.instance;
    }

    public getRestaurants(): Restaurant[] {
        const result: Restaurant[] = [];
        result.push({ id: 1, name: "林师傅", province: "广东", city: "广州", area: "荔湾区", smallCate: "简餐快餐", address: "周门南路12号" });
        result.push({ id: 2, name: "糖朵甜品工坊", province: "浙江", city: "广州", area: "荔湾区", smallCate: "简餐快餐", address: "周门南路12号" });
        result.push({ id: 3, name: "江南食代自助餐厅", province: "福建", city: "福州", area: "台江区", smallCate: "自助餐", address: "工业路193号宝龙城市广场4楼(近万象城)" });
        result.push({ id: 4, name: "MAAN COFFEE(1912店)", province: "江苏", city: "南京", area: "玄武区", smallCate: "其他", address: "南山大道2009号(南航公司正对面)" });
        result.push({ id: 5, name: "冰月啡", province: "广东", city: "广州", area: "番禺区", smallCate: "面包甜点", address: "大学城北一路GOGO新天地3楼" });
        return result;
    }
}