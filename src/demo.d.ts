export interface HoloMapGISConfig {
  /**
   * @description 路网配置
   */
  roadnet: {
    /**
     * @description 是否展示
     */
    visible: boolean;

    /**
     * @description 数据服务类型
     */
    type: string;

    /**
     * @description 数据服务地址
     */
    service: string;

    /**
     * @description 样式类型
     */
    styleType?: string;

    /**
     * @description 样式地址
     */
    styleUrl?: string;
  };

  /**
   * @description 道路拥堵
   */
  roadJam: RoadJam;

  /**
   *
   */
  trip: Trip;
}

export interface RoadJam {
  /**
   * @description 是否展示
   */
  visible: boolean;

  /**
   * @description 数据地址
   */
  dataUrl: string;
}

export type Trip = {
  /**
   * @description 是否展示
   */
  visible: boolean;

  /**
   * @description 数据模式，默认ws
   */
  dataMode: string | "ws";

  /**
   * @description ws服务地址
   */
  wsUrl: string;

  /**
   * @description 是否展示面板
   */
  showPlate: boolean;
  authInfo: {};

  /**
   * @description 数据解析处理函数
   */
  dataParseHandle: (data: {
    objs: {
      angle: string;
      lng: string;
      lat: string;
      vhc_id: string;
      vhc_type_no: string;
      vhc_no: string;
    };
  }) => {
    angle: string;
    lng: string;
    lat: string;
    id: string;
    type: string;
    name: string;
    textHeight: number | 5;
  }[];
};
