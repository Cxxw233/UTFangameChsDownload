---
---

<!--
#      title: ""
#      # 汉化作者
#      authors:
#        - ""
#      links:
#        -
#          # 头一项不需要 name
#          name: ""
#          url: ""
#          # 网盘提取码
#          passcode: ""
#          # 可以放“压缩包提取码”之类的东西
#          notes: ""
-->

{%- assign main_file = page.links[0] -%}
{%- assign has_main_file = main_file and not main_file.name -%}

{%- if has_main_file -%}
{% include tl_file.html file=main_file %}
{%- else -%}{{ page.title }}{%- endif %} {% if page.authors.count > 0 -%}由 {{ page.authors | join: "，" }} 制作{%- endif -%}

{%- assign other_files = page.links -%}
{%- if has_main_file -%}
{%- assign other_files = page.links | slice: 1 -%}
{%- endif -%}
{%- for file in other_files -%}
{% include tl_file.html file=file %} 
{%- endfor -%}

{{ content }}
