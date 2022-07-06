## # e2e测试Playwright实践 

## Demo

1. 进入到项目根目录下

```bash
npm init playwright@latest
# 安装依赖
npm i -D @playwright/test
# 安装支持的浏览器包括chromium,firefox,webkit
npx playwright install
```

1. 跑一个最简单的demo。将tests文件夹下的example.spec.ts删除，重新新建内容

```typescript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
# 模拟ios移动端,模拟设备录制可用命令 npx playwright codegen --device="iPhone 13" www.kdocs.cn

import { test, devices } from '@playwright/test';
test.use({
  ...devices['iPhone 13'],
});
test('test', async ({ page }) => {
  // Go to https://www.kdocs.cn/singleSign4CST?cb=https%3A%2F%2Fwww.kdocs.cn%2Fm%2F
  await page.goto('https://www.kdocs.cn/singleSign4CST?cb=https%3A%2F%2Fwww.kdocs.cn%2Fm%2F');
  // Go to https://www.kdocs.cn/m/
  await page.goto('https://www.kdocs.cn/m/');
  // Go to https://www.kdocs.cn/welcome
  await page.goto('https://www.kdocs.cn/welcome');
});
```

1. 进入终端测试，加--headed可看到chromiun,firefox,webkit三种浏览器打开playwright主页后关闭，测试通过

```bash
npx playwright test
# 查看测试报告
npx playwright show-report
```

![img](https://cloud-pic.wpsgo.com/aGdSd21yc2gzLzYvSUVmd0Z1RDQ2SUE4Z2hETXFGMEJURkdhY0ZndEVmcFlyVkRvM0lTY01lQkt2U2V0VlNlWGpRczBtNXVwQlpYNUpSdkdSdi9GNi90eHI5WHZVMzFWcW5nQlVIRG93ek9XZDJOK3B6Zk5GVFZNdnROMWE5dWQrbDZDTlZDcGw2aEp5T2lwWTQzNTlQUGtacjRmdTZxYWtRTnc2WFRtRS93cU1hRTEwZnA1c3MyZXdIckRpL1BBSGVtVG5xVzlvYkNjOTZpSHN1NFRUcWtuY3R3aTFEY0I5RE1lN0xkZTlQQXNqY1FDdmhKdkd1VVpsQWpTRDExOFhSNEwzYVk9/attach/object/XZX5KAQBNE)

## 搭建过程及例子

进入项目的根目录下的/test/e2e（若没有则新建）后执行

```bash
npm init playwright@latest
```

目录底下将会新增一个配置文件`playwright.config.ts`，具体配置可查看[官方文档](https://playwright.dev/docs/test-configuration)

### 第一个e2e测试：金山文档用户登陆demo

在/tests目录内新建一个login.spec.ts。该案例预期结果为：

1. 打开金山文档
2. 用户登陆
3. 打开样张，预期数据表中有“数据表”标题

（可能会遇到页面跳转goto超时的报错，暂时未知原因，config文件将超时时间调大可提高测试通过概率）

```typescript
import { test, expect } from '@playwright/test';

test.describe('feature foo', () => {
    test.beforeEach(async ({ page }) => {
      // Go to https://www.kdocs.cn/
    await page.goto('https://www.kdocs.cn/');

    page.waitForNavigation
    // Click text=立即使用
    await page.locator('text=立即使用').click();

    // Click text=短信验证码登录
    await page.locator('text=短信验证码登录').click();

    // Click text=同意 >> nth=2
    await page.locator('text=同意').nth(2).click();

    // Click #rectBottom
    await page.frameLocator('iframe').locator('#rectBottom').click();

    // Click #phone
    await page.frameLocator('iframe').locator('#phone').click();

    // Fill #phone
    await page.frameLocator('iframe').locator('#phone').fill('13802880051');

    // Click text=短信验证码发送验证码 >> input[type="text"]
    await page.frameLocator('iframe').locator('text=短信验证码发送验证码 >> input[type="text"]').click();

    await page.frameLocator('iframe').locator('text=短信验证码发送验证码 >> input[type="text"]').fill('885688');

    // Click text=立即登录/注册
    await page.frameLocator('iframe').locator('text=立即登录/注册').click();
    await expect(page).toHaveURL('https://www.kdocs.cn/latest?from=docs');

    page.waitForNavigation

    });
  
    test('my test', async ({ page }) => {
        await page.goto("https://www.kdocs.cn/l/cjefbuxBNEl9?from=docs&R=%2FS%2F1")

        page.waitForNavigation
        // Click text=看板视图 >> nth=0
        await page.locator('text=看板视图').first().click();
        
        page.waitForNavigation
        //   await expect(page.locator('.view-container-wrapper')).toHaveText(/视图列表/);
        await expect(page.locator('.items-wrap > div:nth-child(4)')).toHaveText(/数据表/);
    });
  });
```

## VS Code扩展

在VS Code中，我们可以安装扩展来更为方便的进行测试，并且可以录制Playwright Test并生成对应的代码

![img](https://cloud-pic.wpsgo.com/aGdSd21yc2gzLzYvSUVmd0Z1RDQ2SUE4Z2hETXFGMEJURkdhY0ZndEVmcFlyVkRvM0lTY01lQkt2U2V0VlNlWGpRczBtNXVwQlpYNUpSdkdSdi9GNi90eHI5WHZVMzFWcW5nQlVIRG93ek9XZDJOK3B6Zk5GVFZNdnROMWE5dWQrbDZDTlZDcGw2aEp5T2lwWTQzNTlQUGtacjRmdTZxYWtRTnc2WFRtRS93cU1hRTEwZnA1c3MyZXdIckRpL1BBSGVtVG5xVzlvYkNjOTZpSHN1NFRUcWtuY3R3aTFEY0I5RE1lN0xkZTlQQXNqY1FDdmhKdkd1VVpsQWpTRDExOFhSNEwzYVk9/attach/object/3WC5KAQA2M)

## CI集成

在Jenkins的pipelines中加Playwright的docker镜像，详情查看官方文档

https://playwright.bootcss.com/docs/docker

https://playwright.bootcss.com/docs/ci#jenkins

```bash
$ docker pull mcr.microsoft.com/playwright:bionic
docker run -it --rm --ipc=host mcr.microsoft.com/playwright:bionic /bin/bash
pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:bionic' } }
   stages {
      stage('e2e-tests') {
         steps {
            sh 'npm install'
            sh 'npm run test'
         }
      }
   }
}
```

## 附：在Docker中跑Playwright测试

$PWD为Playwright项目目录下

```bash
# 将项目目录挂载到docker中运行
docker run -v $PWD:/tests -w /tests --rm -it mcr.microsoft.com/playwright:bionic /bin/bash
# 然后进去到容器内的bash，依次执行npm install,npx playwright
root@660adebef173:/tests# npm install
root@660adebef173:/tests# npx playwright test
```

或者直接自己build一个镜像image，在项目的目录下新建一个Dockerfile

```
# Dockerfile
FROM mcr.microsoft.com/playwright:bionic

# copy project (including tests)
COPY . /e2e

WORKDIR /e2e

# Install dependencies
RUN npm install
# Install browsers
RUN npx playwright install

# Run playwright test
CMD [ "npx", "playwright", "test", "--reporter=list" ]
```

进入到项目目录，运行

```bash
docker build -t custom-playwright .
docker run -it --rm --name customplaywright custom-playwright
```

## 总结

- 优点

- - 功能强大，配合插件开发测试效率极高

- 缺点

- - 录制功能仅支持元素，不支持坐标，对应画布区域的操作难以测试