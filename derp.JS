
const P = [
  {
      "permissionName": "驾驶舱菜单",
      "permissionId": "1",
      "level": 1,
      "subTree": [
          {
              "permissionName": "总览",
              "permissionId": "2",
              "level": 2,
              "subTree": [],
              "preList": [
                  "1"
              ],
              "pId": "e06e8b2b-09d6-44bf-bfc2-a7dbca2d0010",
              "permissionInfo": {
                  "permissionName": "总览"
              }
          },
          {
              "permissionName": "查看详情",
              "permissionId": "3",
              "level": 2,
              "subTree": [],
              "preList": [
                  "1"
              ],
              "pId": "c6cfdfdc-0b9f-4720-bd80-bb95dce22b87",
              "permissionInfo": {
                  "permissionName": "查看详情"
              }
          }
      ],
      "preList": [],
      "pId": "887ff799-57c5-45a9-b44c-362d5abf656e",
      "permissionInfo": {
          "permissionName": "驾驶舱菜单"
      }
  },
  {
      "permissionName": "任务部署菜单",
      "permissionId": "4",
      "level": 1,
      "subTree": [
          {
              "permissionName": "事件创建",
              "permissionId": "5",
              "level": 2,
              "subTree": [],
              "preList": [
                  "4"
              ],
              "pId": "59d835d8-a167-45e1-8744-d7f75920326c",
              "permissionInfo": {
                  "permissionName": "事件创建"
              }
          },
          {
              "permissionName": "病例归属",
              "permissionId": "6",
              "level": 2,
              "subTree": [
                  {
                      "permissionName": "事件编辑",
                      "permissionId": "7",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "4",
                          "6"
                      ],
                      "pId": "8fde885f-3643-4d02-a617-15e8ae73121d",
                      "permissionInfo": {
                          "permissionName": "事件编辑"
                      }
                  },
                  {
                      "permissionName": "事件合并",
                      "permissionId": "8",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "4",
                          "6"
                      ],
                      "pId": "431ed09a-e29b-40ee-a806-f8dd94a5f932",
                      "permissionInfo": {
                          "permissionName": "事件合并"
                      }
                  },
                  {
                      "permissionName": "归属事件",
                      "permissionId": "9",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "4",
                          "6"
                      ],
                      "pId": "a4edb854-9dca-4868-94f9-e253f985b35b",
                      "permissionInfo": {
                          "permissionName": "归属事件"
                      }
                  }
              ],
              "preList": [
                  "4"
              ],
              "pId": "55a6661d-b471-42ca-82f8-f41e31fa699c",
              "permissionInfo": {
                  "permissionName": "病例归属"
              }
          },
          {
              "permissionName": "任务查看",
              "permissionId": "10",
              "level": 2,
              "subTree": [],
              "preList": [
                  "4"
              ],
              "pId": "a2c62ca7-3ae0-47a7-a154-c0f5ac736fca",
              "permissionInfo": {
                  "permissionName": "任务查看"
              }
          },
          {
              "permissionName": "人员部署",
              "permissionId": "11",
              "level": 2,
              "subTree": [
                  {
                      "permissionName": "整体部署",
                      "permissionId": "12",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "4",
                          "11"
                      ],
                      "pId": "88fc87f2-a4dd-4d53-bf8c-4f0eeab92418",
                      "permissionInfo": {
                          "permissionName": "整体部署"
                      }
                  },
                  {
                      "permissionName": "详细部署",
                      "permissionId": "13",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "4",
                          "11"
                      ],
                      "pId": "8de60a68-6ecd-45f4-bc01-de8323d3ac0f",
                      "permissionInfo": {
                          "permissionName": "详细部署"
                      }
                  }
              ],
              "preList": [
                  "4"
              ],
              "pId": "3c6246b3-d120-4ffe-b8cf-3f464c725753",
              "permissionInfo": {
                  "permissionName": "人员部署"
              }
          },
          {
              "permissionName": "病例接报",
              "permissionId": "14",
              "level": 2,
              "subTree": [
                  {
                      "permissionName": "新增病例",
                      "permissionId": "15",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "4",
                          "14"
                      ],
                      "pId": "f5feb63e-9234-4242-8ff5-948d342cbe92",
                      "permissionInfo": {
                          "permissionName": "新增病例"
                      }
                  },
                  {
                      "permissionName": "病例编辑",
                      "permissionId": "16",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "4",
                          "14"
                      ],
                      "pId": "d3a169ee-bb33-459f-87a0-df78d9b600ca",
                      "permissionInfo": {
                          "permissionName": "病例编辑"
                      }
                  },
                  {
                      "permissionName": "病例跨区审批",
                      "permissionId": "17",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "4",
                          "14"
                      ],
                      "pId": "b7cac6f1-ecf5-405e-afba-22f733637791",
                      "permissionInfo": {
                          "permissionName": "病例跨区审批"
                      }
                  },
                  {
                      "permissionName": "跨区转移",
                      "permissionId": "18",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "4",
                          "14"
                      ],
                      "pId": "7ad04dc5-c0b9-4661-85de-8f546c85568e",
                      "permissionInfo": {
                          "permissionName": "跨区转移"
                      }
                  }
              ],
              "preList": [
                  "4"
              ],
              "pId": "b84f938f-3dac-4eb1-bf5a-18d04bdc6ba7",
              "permissionInfo": {
                  "permissionName": "病例接报"
              }
          }
      ],
      "preList": [],
      "pId": "4f6dbbb6-653d-46de-a175-f0d3cb00f652",
      "permissionInfo": {
          "permissionName": "任务部署菜单"
      }
  },
  {
      "permissionName": "病例流调菜单",
      "permissionId": "19",
      "level": 1,
      "subTree": [
          {
              "permissionName": "详情查看",
              "permissionId": "20",
              "level": 2,
              "subTree": [
                  {
                      "permissionName": "病例基本信息查看",
                      "permissionId": "21",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "20"
                      ],
                      "pId": "218d7d43-3136-407a-a73f-e874a91a393b",
                      "permissionInfo": {
                          "permissionName": "病例基本信息查看"
                      }
                  },
                  {
                      "permissionName": "流调信息查看",
                      "permissionId": "22",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "20"
                      ],
                      "pId": "d67a4900-b8a5-4540-b896-fd54cddd376f",
                      "permissionInfo": {
                          "permissionName": "流调信息查看"
                      }
                  },
                  {
                      "permissionName": "重点场所查看",
                      "permissionId": "23",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "20"
                      ],
                      "pId": "c9dca0e6-2c5d-4eb4-874c-0de65075e4e5",
                      "permissionInfo": {
                          "permissionName": "重点场所查看"
                      }
                  },
                  {
                      "permissionName": "密接人群查看",
                      "permissionId": "24",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "20"
                      ],
                      "pId": "28cf5358-a67a-49e8-97fd-8e04d35bbe2c",
                      "permissionInfo": {
                          "permissionName": "密接人群查看"
                      }
                  },
                  {
                      "permissionName": "报告下载",
                      "permissionId": "25",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "20"
                      ],
                      "pId": "c10e40a2-1bb8-4110-b330-00ffab37e856",
                      "permissionInfo": {
                          "permissionName": "报告下载"
                      }
                  },
                  {
                      "permissionName": "查阅申请",
                      "permissionId": "26",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "20"
                      ],
                      "pId": "c7ea3cce-0f62-42e5-9e98-39d2260e51e7",
                      "permissionInfo": {
                          "permissionName": "查阅申请"
                      }
                  },
                  {
                      "permissionName": "查阅审批",
                      "permissionId": "27",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "20"
                      ],
                      "pId": "e1af1809-4dc5-40f8-9d3f-53686f6be494",
                      "permissionInfo": {
                          "permissionName": "查阅审批"
                      }
                  }
              ],
              "preList": [
                  "19"
              ],
              "pId": "7075697f-a450-4a71-926c-e2f3a90655e7",
              "permissionInfo": {
                  "permissionName": "详情查看"
              }
          },
          {
              "permissionName": "任务操作",
              "permissionId": "28",
              "level": 2,
              "subTree": [
                  {
                      "permissionName": "病例流调",
                      "permissionId": "29",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "28"
                      ],
                      "pId": "3f1eaa6b-4512-4e92-bbdd-0c1e1f091593",
                      "permissionInfo": {
                          "permissionName": "病例流调"
                      }
                  },
                  {
                      "permissionName": "现场处置",
                      "permissionId": "30",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "28"
                      ],
                      "pId": "8b28d8f6-464b-4f13-9e0e-70cf356320a3",
                      "permissionInfo": {
                          "permissionName": "现场处置"
                      }
                  },
                  {
                      "permissionName": "采样送检",
                      "permissionId": "31",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "28"
                      ],
                      "pId": "7af1ac70-0daa-4b23-8380-438f08c0ca62",
                      "permissionInfo": {
                          "permissionName": "采样送检"
                      }
                  },
                  {
                      "permissionName": "跨区协查",
                      "permissionId": "32",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "28"
                      ],
                      "pId": "3cb991d6-b1da-4e60-9a9c-5ad7c93b905a",
                      "permissionInfo": {
                          "permissionName": "跨区协查"
                      }
                  },
                  {
                      "permissionName": "电话访谈",
                      "permissionId": "33",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "28"
                      ],
                      "pId": "ca94410d-a2a3-402e-a092-f1cab6e882b2",
                      "permissionInfo": {
                          "permissionName": "电话访谈"
                      }
                  },
                  {
                      "permissionName": "改动审批",
                      "permissionId": "34",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "28"
                      ],
                      "pId": "ea362da1-523e-4be3-9fb7-16321d58e4a4",
                      "permissionInfo": {
                          "permissionName": "改动审批"
                      }
                  },
                  {
                      "permissionName": "改动申请",
                      "permissionId": "35",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "28"
                      ],
                      "pId": "be10862f-2ecb-4590-b325-559652f6c35a",
                      "permissionInfo": {
                          "permissionName": "改动申请"
                      }
                  },
                  {
                      "permissionName": "地图轨迹编辑",
                      "permissionId": "36",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "19",
                          "28"
                      ],
                      "pId": "e31c1cbc-620a-46fd-a6d1-d7d066e37aad",
                      "permissionInfo": {
                          "permissionName": "地图轨迹编辑"
                      }
                  }
              ],
              "preList": [
                  "19"
              ],
              "pId": "b2f9c8c1-2d61-41de-b76a-752f007ac25f",
              "permissionInfo": {
                  "permissionName": "任务操作"
              }
          }
      ],
      "preList": [],
      "pId": "780d2905-82a3-4af7-9c1d-da4cb1f250d1",
      "permissionInfo": {
          "permissionName": "病例流调菜单"
      }
  },
  {
      "permissionName": "密接管理菜单",
      "permissionId": "37",
      "level": 1,
      "subTree": [],
      "preList": [],
      "pId": "e3b2234f-0226-447e-abc9-1e98847b7089",
      "permissionInfo": {
          "permissionName": "密接管理菜单"
      }
  },
  {
      "permissionName": "采样送检菜单",
      "permissionId": "38",
      "level": 1,
      "subTree": [],
      "preList": [],
      "pId": "57f0c595-395f-463b-8eba-fe2536436153",
      "permissionInfo": {
          "permissionName": "采样送检菜单"
      }
  },
  {
      "permissionName": "公安协查菜单",
      "permissionId": "39",
      "level": 1,
      "subTree": [
          {
              "permissionName": "详情查看",
              "permissionId": "40",
              "level": 2,
              "subTree": [],
              "preList": [
                  "39"
              ],
              "pId": "006f1f94-a182-4cc2-a983-69ae3e21fc1e",
              "permissionInfo": {
                  "permissionName": "详情查看"
              }
          },
          {
              "permissionName": "信息上传",
              "permissionId": "41",
              "level": 2,
              "subTree": [
                  {
                      "permissionName": "病例信息",
                      "permissionId": "42",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "39",
                          "41"
                      ],
                      "pId": "6bc7c891-f5fb-465e-876a-539cae92a362",
                      "permissionInfo": {
                          "permissionName": "病例信息"
                      }
                  },
                  {
                      "permissionName": "密接信息",
                      "permissionId": "43",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "39",
                          "41"
                      ],
                      "pId": "96a8e25b-f3e3-40e0-b68b-e5599b28e947",
                      "permissionInfo": {
                          "permissionName": "密接信息"
                      }
                  }
              ],
              "preList": [
                  "39"
              ],
              "pId": "20caa1c6-e573-44c0-b986-22e0a8b512ee",
              "permissionInfo": {
                  "permissionName": "信息上传"
              }
          },
          {
              "permissionName": "信息校验",
              "permissionId": "44",
              "level": 2,
              "subTree": [
                  {
                      "permissionName": "病例信息",
                      "permissionId": "45",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "39",
                          "44"
                      ],
                      "pId": "ee4432bc-2824-4286-a593-5ac9fc20f0a9",
                      "permissionInfo": {
                          "permissionName": "病例信息"
                      }
                  },
                  {
                      "permissionName": "密接信息",
                      "permissionId": "46",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "39",
                          "44"
                      ],
                      "pId": "e3616b06-01ce-486b-9b9b-85a8a014487e",
                      "permissionInfo": {
                          "permissionName": "密接信息"
                      }
                  }
              ],
              "preList": [
                  "39"
              ],
              "pId": "ef96e5cd-12f9-4a36-b3ec-0be9e60d87dd",
              "permissionInfo": {
                  "permissionName": "信息校验"
              }
          }
      ],
      "preList": [],
      "pId": "5e262c95-912e-4546-9f41-bf206f2fc41b",
      "permissionInfo": {
          "permissionName": "公安协查菜单"
      }
  },
  {
      "permissionName": "系统管理菜单",
      "permissionId": "47",
      "level": 1,
      "subTree": [
          {
              "permissionName": "角色管理",
              "permissionId": "48",
              "level": 2,
              "subTree": [],
              "preList": [
                  "47"
              ],
              "pId": "04d2c8a2-fec2-4261-bc61-90efffb7f7ca",
              "permissionInfo": {
                  "permissionName": "角色管理"
              }
          },
          {
              "permissionName": "账号管理",
              "permissionId": "49",
              "level": 2,
              "subTree": [
                  {
                      "permissionName": "创建账号",
                      "permissionId": "50",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "47",
                          "49"
                      ],
                      "pId": "d0d8e85a-0d52-49e3-a111-3e4dd64618df",
                      "permissionInfo": {
                          "permissionName": "创建账号"
                      }
                  },
                  {
                      "permissionName": "密码重置",
                      "permissionId": "51",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "47",
                          "49"
                      ],
                      "pId": "875b8e22-0bb4-418d-b045-c26f5c579459",
                      "permissionInfo": {
                          "permissionName": "密码重置"
                      }
                  },
                  {
                      "permissionName": "电话工号分配",
                      "permissionId": "52",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "47",
                          "49"
                      ],
                      "pId": "9f8041c8-69dd-4d0b-a1e5-003c03fa6992",
                      "permissionInfo": {
                          "permissionName": "电话工号分配"
                      }
                  },
                  {
                      "permissionName": "详细信息查看",
                      "permissionId": "53",
                      "level": 3,
                      "subTree": [],
                      "preList": [
                          "47",
                          "49"
                      ],
                      "pId": "2d3ae170-3f90-471c-a927-e43854753aa4",
                      "permissionInfo": {
                          "permissionName": "详细信息查看"
                      }
                  }
              ],
              "preList": [
                  "47"
              ],
              "pId": "8695bdc4-ad84-460c-a06e-3234abc52e0f",
              "permissionInfo": {
                  "permissionName": "账号管理"
              }
          },
          {
              "permissionName": "密码修改",
              "permissionId": "54",
              "level": 2,
              "subTree": [],
              "preList": [
                  "47"
              ],
              "pId": "0b440c40-63f2-42d5-8537-b115c4bc34b2",
              "permissionInfo": {
                  "permissionName": "密码修改"
              }
          }
      ],
      "preList": [],
      "pId": "cb7cd044-5fea-417d-8516-6673d5e60a1f",
      "permissionInfo": {
          "permissionName": "系统管理菜单"
      }
  },
  {
      "permissionName": "手机端",
      "permissionId": "55",
      "level": 1,
      "subTree": [],
      "preList": [],
      "pId": "d007cf3b-65e1-4bc8-ad5c-a77c3b629993",
      "permissionInfo": {
          "permissionName": "手机端"
      }
  }
]



function deepTrep(data, newList = []) {
  for (const item of data) {
    newList.push(item.permissionId);
    if (item.subTree && item.subTree.length > 0) {
      console.log();
       deepTrep(item.subTree, newList);
    }
  }
  return newList;
}

let op = []
const f =  deepTrep( P)
console.log(f);