import sys
from mypy.plugin import Plugin


def output(*args):
    print(*args, file=sys.stderr)


class CustomPlugin(Plugin):
    # def get_customize_class_mro_hook(self, fullname: str):
    #     def callback(ctx):
    #         if ctx.cls.base_type_exprs:
    #             for base_type_expr in ctx.cls.base_type_exprs:
    #                 if not hasattr(base_type_expr, "expr"):
    #                     print(fullname, ":", base_type_expr)
    #                 if (
    #                     hasattr(base_type_expr, "expr")
    #                     and base_type_expr.expr.fullname == "django.db.models"
    #                 ):
    #                     print(fullname)
    #         return None

    #     return callback

    def get_method_hook(self, fullname: str):
        def callback(ctx):
            if "filter" in fullname and "django" in fullname:
                output(
                    fullname, ":", ctx.type.type, ctx.type.args, ctx.context.callee.name
                )
            return ctx.default_return_type

        return callback


def plugin(version: str):
    return CustomPlugin
