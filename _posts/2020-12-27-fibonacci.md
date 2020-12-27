---
layout: post
title:  "Fibonacci"
date:   2020-12-17 16:11:00 +0800
categories: algorithm
---
#### 1. 递归

{% highlight python %}
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)
{% endhighlight %}

#### 2. 

{% highlight python %}
def fib(n):
    fib_dict = {0: 0, 1: 1}
    for i in range(2, n + 1):
        fib_dict[i] = fib_dict[i - 1] + fib_dict[i - 2]
        fib_dict.pop(i - 2)
    return fib_dict[n]
{% endhighlight %}

#### 3. 

{% highlight python %}
def fib(n):
    a = 0
    b = 1
    if n < 2:
        return n
    for i in range(2, n + 1):
        a, b = b, a + b
    return b
{% endhighlight %}

参考：[algorithmist][algorithmist]

[algorithmist]: https://algorithmist.com/wiki/Memoization
