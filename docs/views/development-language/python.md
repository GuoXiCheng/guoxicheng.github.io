## python
## python模块
### json模块

- 将json对象转化为字符串

  ```python
  import json
  jsonStr = json.dumps(jsonObject)
  
  # 使用参数让json数据格式化输出
  jsonStr = json.dumps(jsonObject, sort_keys = True, indent = 4, separators = (', ', ': '))
  ```

- 将json字符串转化为json对象

  ```python
  jsonObject = json.loads(jsonStr)
  ```

- 写入json数据

  ```python
  with open('data.json', 'w') as f:
      json.dump(jsonObject, f)
  
  # 使用参数让json数据格式化写入
  with open('data.json', 'w') as f:
      json.dump(jsonObject, f, sort_keys=True, indent=4,separators=(', ', ': '))
  ```

- 读取json数据

  ```python
  with open('data.json', 'r') as f:
      jsonObject = json.load(f)
  ```

### configparser模块

- 配置文件config.ini

  ```ini
  [section1]
  option1 = value1
  option2 = value2
  
  [section2]
  option1 = value1
  option2 = value2
  ```

- 读配置文件

  ```python
  import configparser
  config = configparser.ConfigParser()
  config.read('config.ini')
  
  # 获取所有的section
  se = config.sections() 
  # 获取第一个section下的所有option
  op = config.options(se[0]) 
  
  # 获取第一个section下的所有(option, value)
  its = config.items(se[0]) 
  #获取第一个section下，第一个option对应的value
  value = config.get(se[0], op[0]) 
  ```

- 写配置文件

  ```python
  config = configparser.ConfigParser()
  
  # 添加一个section
  config.add_section('section3')
  
  # 在对应section下添加一个(option, value)
  config.set('section3', 'option1', 'value1')
  
  # 向config.ini中写入
  config.write(open('config.ini', 'w'))
  
  ```

### datetime模块

- 获取当前系统时间

  ```python
  import datetime
  time = datetime.datetime.now() # 2020-08-10 14:56:21.736977
  ```

- 格式化日时

  | 参数格式                      | 描述                         | 输出                     |
  | ----------------------------- | ---------------------------- | ------------------------ |
  | ```t = time.strftime('%y')``` | 两位数年份                   | 20                       |
  | ```t = time.strftime('%Y')``` | 四位数年份                   | 2020                     |
  | ```t = time.strftime('%m')``` | 两位数月份                   | 08                       |
  | ```t = time.strftime('%d')``` | 两位数日期                   | 10                       |
  | ```t = time.strftime('%H')``` | 24小时制小时                 | 15                       |
  | ```t = time.strftime('%I')``` | 12小时制小时                 | 3                        |
  | ```t = time.strftime('%M')``` | 分钟数                       | 08                       |
  | ```t = time.strftime('%S')``` | 秒数                         | 47                       |
  | ```t = time.strftime('%a')``` | 简化星期名称                 | Mon                      |
  | ```t = time.strftime('%A')``` | 完整星期名称                 | Monday                   |
  | ```t = time.strftime('%b')``` | 简化月份名称                 | Aug                      |
  | ```t = time.strftime('%B')``` | 完整月份名称                 | August                   |
  | ```t = time.strftime('%c')``` | 完整日期时间表示             | Mon Aug 10 15:12:45 2020 |
  | ```t = time.strftime('%j')``` | 年内第几天                   | 223                      |
  | ```t = time.strftime('%p')``` | A.M.或P.M.                   | PM                       |
  | ```t = time.strftime('%U')``` | 年内第几个星期，星期天为开始 | 32                       |
  | ```t = time.strftime('%w')``` | 星期0-6，星期天为开始        | 1                        |
  | ```t = time.strftime('%W')``` | 年内第几个星期，星期一为开始 | 32                       |
  | ```t = time.strftime('%x')``` | 月/日/年表示                 | 08/10/20                 |
  | ```t = time.strftime('%X')``` | 时：分：秒时间表示           | 15:19:32                 |
  | ```t = time.strftime('%F')``` | 年-月-日表示                 | 2020-08-10               |

### openpyxl模块

- 新建一个工作簿

  ```python
  import openpyxl
  
  wb = openpyxl.Workbook()
  ws = wb.active # 获取新建的sheet
  ```

- 加载一个工作簿

  ```python
  wb = openpyxl.load_workbook('Excel.xlsx')
  ws = wb['Sheet']
  ```

- 获取工作表的最大行列

  ```python
  row = ws.max_row
  
  col = ws.max_column
  ```

- 单元格赋值

  ```python
  ws['A1'] = 123
  ```

- 在现有数据下一行追加一行数据

  ```python
  ws.append([1, 2, 3])
  ```

- 设置单元格的行高和列宽

  ```python
  ws.column_dimensions['A'].width = 20
  
  ws.row_dimensions[1].height = 40
  ```

- 字母和数字的转换

  ```python
  from openpyxl.utils import get_column_letter
  from openpyxl.utils import column_index_from_string
  
  col = column_index_from_string('A')
  
  letter = get_column_letter(1)
  ```

- 插入公式

  ```python
  ws['A5'] = '=AVERAGE(A2:A4)'
  ```

- 保存工作簿

  ```python
  wb.save('Excel.xlsx')
  ```
### BeautifulSoup模块

### requests模块