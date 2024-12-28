# FileCloudDisk

基于 **SpringBoot** 和 **Vue** 的私域文件云盘，类似 **CHFS**。

## 使用教程

**视频教程**：[仿写CHFS的个人文件云盘v1.1](https://www.bilibili.com/video/BV1yLCbYqEZU/?share_source=copy_web&vd_source=de558515d68c4ec5833433070f1efa89)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113729425380768&bvid=BV1yLCbYqEZU&cid=27574141901&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 自行打包说明

### 1. 下载项目代码

- **file-cloud-disk-fe**：前端使用 **Vue3**。
- **file-cloud-disk**：后端基于 **JDK8** 和 **SpringBoot 2.X**。

### 2. 前端打包

1. 解压后进入前端代码目录。
2. 运行以下命令：
   ```bash
   pnpm i  # 安装前端依赖
   pnpm run build  # 生成 dist 文件夹
   ```

### 3. 后端打包

1. 使用 **IDEA** 打开后端项目。
2. 在 `pom` 文件夹下刷新 Maven 依赖。
3. 执行以下步骤：
   - 运行 `clean` 清除缓存。
   - 将 `dist` 文件夹内的所有文件复制到 `resources/static` 文件夹下（注意：不需要 `dist` 文件夹本身）。
   - 跳过测试：`-DskipTests`。
   - 打包项目。

### 4. 使用 EXE 文件

如果需要生成 **EXE** 文件，请参考以下文档，并配合以下参数：

[EXE 文件生成文档](https://kvgwsif8t4g.feishu.cn/docx/KNmrd9ux8o7pU2xxBSPczZnonrc?from=from_copylink)

- **VM Parameters**: `-Dfile.encoding=GB18030`
- **Main class**: `org.springframework.boot.loader.JarLauncher`
- **Arguments for main class**: `--spring.config.additional-location=file:./config/setting.yml`

---

**提示**：确保在打包过程中所有依赖项已正确安装，并且配置文件路径无误。
