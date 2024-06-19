import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("A circle must be defined by either radius or diameter.")
    
    @property
    def diameter(self):
        return self.radius * 2
    
    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2
    
    @property
    def area(self):
        return math.pi * self.radius ** 2
    
    def __str__(self):
        return f"Circle with radius: {self.radius} and diameter: {self.diameter}"
    
    def __repr__(self):
        return f"Circle(radius={self.radius})"
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented
    
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented
    
    def __le__(self, other):
        if isinstance(other, Circle):
            return self.radius <= other.radius
        return NotImplemented
    
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented
    
    def __ge__(self, other):
        if isinstance(other, Circle):
            return self.radius >= other.radius
        return NotImplemented

c1 = Circle(radius=3)
c2 = Circle(diameter=8)
c3 = Circle(radius=5)

print(c1)  
print(c2)  
print(c3)  

print(c1.area)  
print(c2.area)  
print(c3.area)  

c4 = c1 + c3
print(c4)  

print(c1 == c2)  
print(c1 < c2)   
print(c3 > c2)  

circles = [c1, c2, c3, c4]
sorted_circles = sorted(circles)
print(sorted_circles)  
import turtle

def draw_circle(radius):
    t = turtle.Turtle()
    t.circle(radius)
    turtle.done()

for circle in sorted_circles:
    draw_circle(circle.radius)
