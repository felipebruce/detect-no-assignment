/**
 * @fileoverview Rule to enforce functions like map, filter and reduce to be assigned to a variable.
 * @author Felipe Bruce
 */
'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: {
    'detect-no-assignment': {

      create(context) {
        /**
         * Checks a function to see if it has too many parameters.
         * @param {ASTNode} node The node to check.
         * @returns {boolean}
         * @private
         */
        function verifyArrowFunctionExpression(node) {
          let hasArrowFunctionExpression = false;
          node.expression.arguments.forEach(arg => {
            if(arg.type === 'ArrowFunctionExpression') {
               hasArrowFunctionExpression = true;
               }
          });
          return hasArrowFunctionExpression;
        }

        /**
         * Checks a function to see if it has too many parameters.
         * @param {ASTNode} node The node to check.
         * @returns {boolean}
         * @private
         */
        function checkFunction(node) {
          const trigger = [ 'map', 'filter', 'reduce' ];

          if (node.expression && 
              node.expression.callee && 
              node.expression.callee.property && 
              trigger.includes(node.expression.callee.property.name)) {

            if(verifyArrowFunctionExpression(node)) { 
              context.report({
                node,
                message: 'Should assign to a variable'
            });
            } else {
              context.report(
              {
                node,
                message: `Consider using "forEach" instead of ${node.expression.callee.property.name} as its return value is not being used here.`,
                fix(fixer) {
                      return fixer.replaceTextRange(node.expression.callee.property.range, 'forEach');
                }
              });
            }
          }
        }
        return {
          ExpressionStatement: checkFunction
        };
      },
    },
  },
};
